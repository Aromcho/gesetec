# QA con Playwright

Con el sitio corriendo (`npm run build && npm start`):

```bash
pip install playwright && playwright install chromium
python qa/capturas.py "/,/service-oficial-peisa" mobile,desktop   # capturas en qa/capturas/
python qa/pedido.py                                               # flujo "Pedí tu service" hasta el link de WhatsApp
```
