import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ALL_POINTS, ALL_SUITS } from "./constants";
import styles from "./PlayingCard.module.css";
import CardPatern from "./CardPattern";

function isRed(suit) {
  return suit === "♥" || suit === "♦";
}

function PlayingCard(props) {
  return (
    <div
      className={classNames(
        styles.playingCard,
        styles[props.size],
        props.className
      )}
      style={props.style}
    >
      <div className={styles.inner}></div>
      <div className={styles.content}>
        <div
          className={classNames(styles.textTop, styles.text, {
            [styles.red]: isRed(props.suit),
          })}
        >
          <div>{props.point}</div>
          <div className={styles.suitSmall}>{props.suit}</div>
        </div>
        <div
          className={classNames(styles.textBottom, styles.text, {
            [styles.red]: isRed(props.suit),
          })}
        >
          <div>{props.point}</div>
          <div className={styles.suitSmall}>{props.suit}</div>
        </div>
        <div className={styles.pattern}>
          {props.size !== "small" ? (
            <CardPatern
              suit={props.suit}
              point={props.point}
              size={props.size}
            />
          ) : (
            <div
              className={classNames(styles.suit, {
                [styles.red]: isRed(props.suit),
              })}
            >
              {props.suit}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

PlayingCard.propTypes = {
  suit: PropTypes.oneOf(ALL_SUITS).isRequired,
  point: PropTypes.oneOf(ALL_POINTS).isRequired,
  size: PropTypes.oneOf(["small", "normal", "big"]),
  style: PropTypes.object,
  className: PropTypes.string,
};

PlayingCard.defaultProps = {
  size: "normal",
};

export default PlayingCard;
