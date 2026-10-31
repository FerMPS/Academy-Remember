/* Validaciones de formulario (solo frontend, sin backend) */

export const validarEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const validarNombre = (v: string) => v.trim().length >= 3;

// En login no juzgamos el formato de la contraseña:
// basta con que no esté vacía (como haría un login real).
export const validarPasswordLogin = (v: string) => v.length > 0;
