import Image from "next/image";
import { CSSProperties, memo } from "react";
import { TypeIcon, InitialPokeData, convertId } from "@/features/pokemon";
import styles from "./pokemon-list-card.module.scss";
import { ruda } from "@/assets/fonts";

interface PokeListCard extends InitialPokeData {
  style?: CSSProperties;
}

const PokemonListCard = memo(
  ({ id, name, types, style }: PokeListCard): JSX.Element => {
    const strId = convertId(id.toString());
    return (
      <section
        className={`${styles.container} ${ruda.className}`}
        style={style}
        tabIndex={0}
      >
        <div className={styles.leftContainer}>
          <div className={styles.headContainer}>
            <p className={`${styles.pokeId}`} aria-label={`Number ${id}`}>
              {id}
            </p>
            <p className={`${styles.pokeName}`}>
              {name?.replace(/[a-z]/, (x) => x.toUpperCase())}
            </p>
          </div>
          <section className={`${styles.typeContainer}`}>
            {types.map((type, i: number) => (
              <TypeIcon type={type} format="card" key={i} />
            ))}
          </section>
        </div>
        <div className={styles.rightContainer}>
          <Image
            src={`/compressed-pokemon/${strId}.png`}
            alt=""
            width={160}
            height={160}
            quality={100}
            className={`${styles.pokeImg}`}
          />
        </div>
      </section>
    );
  }
);

PokemonListCard.displayName = "PokemonListCard";

export { PokemonListCard };