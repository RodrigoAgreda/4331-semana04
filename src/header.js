const Header = () => {
    return <header>
        <div class="card text-center">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="true" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Presentacion</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <h5 class="card-title">Ayudanos da darles un hogar!</h5>
                <p class="card-text">Y no me alcanza para su comida, arena, camas y agua........</p>
            </div>
        </div>
        <br/><br/>
    </header>;
}

export default Header;