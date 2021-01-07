module.exports = async () => {
    const Tweet = require('./models/Tweet')
    const User = require('./models/User')

    User.hasMany(Tweet, { as: 'Tweets', foreignKey: 'userId' })
    Tweet.belongsTo(User, { as: 'User', foreignKey: 'userId' })

    const errHandler = err => {
        console.error('Error: ', err)
    }

    const user = await User.create({
        username: 'alexdmc',
        passwd: '1234568910'
    }).catch(errHandler);

    const tweet = await Tweet.create({
        content: 'This is actually the tweet content Tweeted from Iphone',
        userId: user.id
    }).catch(errHandler);

    const users = User.findAll({ where: { username: 'alexdmc' }, include: [ { model: Tweet } ] }).catch(errHandler)

    console.log('AlexDMC Tweets: ', JSON.stringify(users))
}