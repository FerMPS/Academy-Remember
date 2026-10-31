<div align="center">

<img src="public/logo.png" alt="Academy Remember" width="180" />

# Academy Remember

**Aprende. Organiza. Avanza.**

Inscripción, pagos y guías en un solo lugar.

</div>

---

## La idea

Estudiar no debería sentirse como perseguir papeles por toda la escuela.

**Academy Remember** es una app móvil pensada para que estudiantes de básica, bachillerato y universidad tengan todo su mundo académico en un mismo lugar: registrarse, elegir su nivel, acceder a guías de estudio y gestionar su plan, sin saltar entre mil plataformas.

Nuestra meta es simple y ambiciosa: **que recordar lo que aprendes sea tan fácil como entrar a la app.**

## Qué encontrarás hoy

- 🎓 **Bienvenida** con la propuesta de valor de la app.
- 📝 **Registro inteligente** que se adapta a tu nivel (grado, año o carrera).
- 🔐 **Inicio de sesión** con validaciones y feedback en tiempo real.
- 💎 **Planes Premium** mensual y anual con flujo de activación.
- 📚 **Dashboard y materias** como base de la próxima gran etapa.

> Esta versión es un **prototipo funcional de frontend**: los flujos de registro, login y pago están simulados. No hay backend ni cobros reales todavía.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) y listo. La app se muestra dentro de un marco de teléfono para vivir la experiencia móvil desde el navegador.

## Bajo el capó

| Pieza | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 4 |
| Componentes | shadcn/ui + Radix UI |
| Íconos | lucide-react |
| Lenguaje | TypeScript |

## Estructura rápida

```
app/          Páginas: bienvenida, registro, login, premium, dashboard, materias
components/   Logo, marco de teléfono y componentes de UI
lib/          Validaciones y utilidades
public/       Logo y recursos estáticos
```

## ¿Hacia dónde vamos?

Conectar autenticación y pagos reales, construir el dashboard de guías y convertir a Academy Remember en el compañero académico que nunca olvida lo importante.

---

<div align="center">

Hecho con curiosidad, café y muchas ganas de aprender. ☕

</div>
