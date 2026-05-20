import { colors } from '../../tokens/tokens';

const Avatar = ({ initial, bg = colors.g500, size = 36 }) => (
  <div
    className="avatar"
    style={{
      width: size,
      height: size,
      background: bg,
      fontSize: Math.round(size * 0.38),
    }}
  >
    {initial}
  </div>
);

export default Avatar;
