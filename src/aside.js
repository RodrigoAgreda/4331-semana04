const Aside = () => {
    return <aside>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <form className="row g-3">
            <div className="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Calle Av." />
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Dirección 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Departamento, estudio, o piso" />
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">Departamento</label>
                <select id="inputState" className="form-select">
                    <option selected>Elige...</option>
                    <option>Amazonas</option>
                    <option>Ancash</option>
                    <option>Apurimac</option>
                    <option>Arequipa</option>
                    <option>Ayacucho</option>
                    <option>Cajamarca</option>
                    <option>Callao</option>
                    <option>Cusco</option>
                    <option>Huancavelica</option>
                    <option>Huanuco</option>
                    <option>Ica</option>
                    <option>Junín</option>
                    <option>La Libertad</option>
                    <option>Lambayeque</option>
                    <option>Lima</option>
                    <option>Loreto</option>
                    <option>Madre de Dios</option>
                    <option>Moquegua</option>
                    <option>Pasco</option>
                    <option>Piura</option>
                    <option>Puno</option>
                    <option>San Martín</option>
                    <option>Tacna</option>
                    <option>Tumbes</option>
                    <option>Ucayali</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Notificame!
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    </aside>;
}

export default Aside;