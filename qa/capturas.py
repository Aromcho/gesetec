import sys, asyncio, os
pass  # si usás otra ruta de navegadores: PLAYWRIGHT_BROWSERS_PATH
from playwright.async_api import async_playwright
BASE='http://localhost:3000'
rutas = sys.argv[1].split(',') if len(sys.argv)>1 else ['/']
modos = sys.argv[2].split(',') if len(sys.argv)>2 else ['mobile','desktop']
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'capturas'); os.makedirs(OUT, exist_ok=True)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for modo in modos:
            if modo=='mobile':
                ctx = await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2, is_mobile=True, has_touch=True, locale='es-AR', timezone_id='America/Argentina/Buenos_Aires', reduced_motion='reduce')
            else:
                ctx = await b.new_context(viewport={'width':1440,'height':900}, device_scale_factor=1, locale='es-AR', timezone_id='America/Argentina/Buenos_Aires', reduced_motion='reduce')
            pg = await ctx.new_page()
            errs=[]
            pg.on('console', lambda m: errs.append(m.text) if m.type=='error' else None)
            pg.on('pageerror', lambda e: errs.append(str(e)))
            for r in rutas:
                await pg.goto(BASE+r, wait_until='networkidle')
                # scroll para disparar apariciones y lazy-load
                h = await pg.evaluate('document.body.scrollHeight')
                for y in range(0, h, 500):
                    await pg.evaluate(f'window.scrollTo(0,{y})'); await pg.wait_for_timeout(60)
                await pg.evaluate('window.scrollTo(0,0)'); await pg.wait_for_timeout(1600)
                name = (r.strip('/').replace('/','_') or 'inicio')+f'-{modo}.png'
                await pg.screenshot(path=f'{OUT}/{name}', full_page=True)
                print(name, 'errores:', errs[-5:] if errs else 'ninguno'); errs.clear()
            await ctx.close()
        await b.close()
asyncio.run(main())
