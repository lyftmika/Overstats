const getData = (data) => {
  if( data !== null) {
    return (
      [
        [{title: 'StreetFighter 👊', subtitle: 'melee final blows', value: data.game_stats.melee_final_blows, unit: 'kills' },
        {title: 'U are on fire 🔥', subtitle: 'time spent on fire', value: data.game_stats.time_spent_on_fire, unit: 'hours' },
        {title: 'Stay on the point ⬇️', subtitle: 'time spent on the point', value: data.game_stats.objective_time, unit: 'hours' }],
        [{title: 'Time Wasted 🕕', subtitle: 'total time played', value: data.game_stats.time_played, unit: 'hours' },
        {title: 'Card collector 🃏', subtitle: 'total cards collected', value: data.game_stats.cards, unit: 'cards' },
        {title: 'Olympic gamer 🏅', subtitle: 'total medals collected', value: data.game_stats.medals, unit: ' medals' }],
        [{title: 'Turret slayer 🔨', subtitle: 'total turrets destroyed', value: data.game_stats.turrets_destroyed, unit: 'turrets' },
        {title: 'Multikill 🎯', subtitle: 'best kill streak', value: data.game_stats.kill_streak_best, unit: 'kills' },
        {title: 'Greenpeace ✌️', subtitle: 'total enviromental kills', value: data.game_stats.environmental_kills, unit: 'kills'}]
      ]
    )
  }
    return (
      [
        [{title: 'StreetFighter 👊', subtitle: 'melee final blows', value: 0, unit: 'kills' },
        {title: 'U are on fire 🔥', subtitle: 'time spent on fire', value: 0, unit: 'hours' },
        {title: 'Stay on the point ⬇️', subtitle: 'time spent on the point', value: 0, unit: 'hours' }],
        [{title: 'Time Wasted 🕕', subtitle: 'total time played', value: 0, unit: 'hours' },
        {title: 'Card collector 🃏', subtitle: 'total cards collected', value: 0, unit: 'cards' },
        {title: 'Olympic gamer 🏅', subtitle: 'total medals collected', value: 0, unit: ' medals' }],
        [{title: 'Turret slayer 🔨', subtitle: 'total turrets destroyed', value: 0, unit: 'turrets' },
        {title: 'Multikill 🎯', subtitle: 'best kill streak', value: 0, unit: 'kills' },
        {title: 'Greenpeace ✌️', subtitle: 'total enviromental kills', value: 0, unit: 'kills'}]
      ]
    )

}


export const cards = (data, type) => {
  if (type === 'quickplay') {
    return getData(data.stats.quickplay)
  }

  return getData(data.stats.competitive)
}

