import React from 'react'
const add = () => {
	return (
		<div class="section1">
			<h2>Agregar nuevo usuario</h2>
			<form id="form1">
				<input type="text" name="nombre" id="nombre" placeholder="Ingrese el nombre" />
				<input
					type="text"
					name="apellido"
					id="apellido"
					placeholder="Ingrese el apellido"
				/>
				<input
					type="text"
					name="telefono"
					id="telefono"
					placeholder="Ingrese el telfono"
				/>
				<input type="submit" value="Guardar" />
			</form>
		</div>

	)
}

export default add
