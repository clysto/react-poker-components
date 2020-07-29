import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CARD_PATTERN_MAP, ALL_POINTS, ALL_SUITS } from "./constants";

import styles from "./CardPattern.module.css";

function isRed(suit) {
  return suit === "♥" || suit === "♦";
}

function CardPattern({ point, suit, size }) {
  const pattern = CARD_PATTERN_MAP[point];

  return (
    <div className={styles.wrapper}>
      {pattern && (
        <div
          className={classNames(styles.pattern, {
            [styles.red]: isRed(suit),
            [styles.big]: size === "big",
          })}
        >
          <div className={styles.col}>
            {[...Array(pattern[0]).keys()].map((index) => (
              <div
                key={index}
                className={classNames({
                  [styles.rotated]: index >= pattern[2] / 2,
                })}
              >
                {suit}
              </div>
            ))}
          </div>
          <div
            className={classNames(styles.col, {
              [styles.colOne]: (pattern[1] === 1 && pattern[0]) === 2,
              [styles.col31]: (pattern[1] === 1 && pattern[0]) === 3,
              [styles.colOneBig]: pattern[1] === 1 && pattern[0] === 0,
              [styles.col41]: pattern[1] === 1 && pattern[0] === 4,
              [styles.col42]: pattern[1] === 2 && pattern[0] === 4,
              [styles.col32]: pattern[1] === 2 && pattern[0] === 3,
            })}
          >
            {[...Array(pattern[1]).keys()].map((index) => (
              <div
                key={index}
                className={classNames({
                  [styles.rotated]: index >= pattern[1] / 2,
                })}
              >
                {suit}
              </div>
            ))}
          </div>
          <div className={styles.col}>
            {[...Array(pattern[2]).keys()].map((index) => (
              <div
                key={index}
                className={classNames({
                  [styles.rotated]: index >= pattern[2] / 2,
                })}
              >
                {suit}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

CardPattern.propTypes = {
  point: PropTypes.oneOf(ALL_POINTS).isRequired,
  suit: PropTypes.oneOf(ALL_SUITS).isRequired,
  size: PropTypes.oneOf(["normal", "big"]),
};

CardPattern.defaultProps = {
  size: "normal",
};

export default CardPattern;
