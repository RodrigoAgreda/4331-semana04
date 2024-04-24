import Carousel from 'react-bootstrap/Carousel';

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    return <main>
        <Carousel fade>
            <Carousel.Item>
                <img src="../gato1.jpg" class="d-block w-100" alt="..." />
                <Carousel.Caption>
                    <h3>Jorge</h3>
                    <p>Tiende a ser agresivo <i data-feather="alert-triangle"/> </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../gato2.jpg" className="d-block w-100" alt="..." />
                <Carousel.Caption>
                    <h3>Jaime</h3>
                    <p>Le gusta estar con más gatos <i data-feather="github"/> </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../gato3.jpg" className="d-block w-100" alt="..." />
                <Carousel.Caption>
                    <h3>Federico</h3>
                    <p>Es fotogénico <i data-feather="aperture"/> </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </main>;
}

export default Main;