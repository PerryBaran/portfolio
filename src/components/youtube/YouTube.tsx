import style from './youtube.module.css';

interface Props {
  embedId: string,
}

function YoutubeEmbed (props: Props) {
  const { embedId } = props;

  return (
    <iframe
      className={style.iframe}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
};

export default YoutubeEmbed;