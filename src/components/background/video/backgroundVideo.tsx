import style from './backgroundVideo.module.css';

const BackgroundVideo = (props: { src: string; }) => {
    const {src} = props;

    return (
        <div className={style.container}>
            <video 
                autoPlay
                muted
                loop
                src={src}
            />
      </div>
    );
};


export default BackgroundVideo;