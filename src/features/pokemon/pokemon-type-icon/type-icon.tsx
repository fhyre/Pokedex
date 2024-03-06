import styles from './styles/type-icon.module.scss';
import { IPokeTypes } from '@/features/pokemon';
import { ImageWrapper } from '@/features/ui/image-wrapper';

interface ITypeIcon extends IPokeTypes {
  size: 'small' | 'medium' | 'large';
  prio?: boolean;
}

export function TypeIcon({ type, status, size, prio }: ITypeIcon): JSX.Element {
  return (
    <ImageWrapper
      imagePath={`/type-icons/${type}.png`}
      width={469}
      height={126}
      quality={100}
      imageAlt=""
      styles={[styles[`${size}Type`]]}
      priority={prio}
    />
  );
}

TypeIcon.defaultProps = {
  prio: false,
};
