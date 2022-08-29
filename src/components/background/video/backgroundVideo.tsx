import { useState } from 'react';
import style from './backgroundVideo.module.css';

const BackgroundVideo = (props: { src: string; }) => {
    const {src} = props;
    const [loaded, setLoaded] = useState(false)

    return (
        <div className={style.container}>
            <video
                autoPlay
                muted
                loop
                src={src}
                className={loaded ? style.fadeIn : undefined}
                onCanPlay={() => setLoaded(true)}
            />
      </div>
    );
};


export default BackgroundVideo;