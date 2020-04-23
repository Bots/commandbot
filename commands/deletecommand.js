module.exports = {
  name: 'deletecommand',
  execute(msg, args) {
    
    // This pops the next arg off the array (the command name to be deleted) and makes it lowercase
    const discordCommandName = args.shift().toLowerCase()
        
    try {
      // Find our object according to the name of the command
      var cmd = await Command.findOne({commandName: discordCommandName})

      // Delete the document and reply that it has been deleted
      Command.findByIdAndDelete(cmd._id, (err) => {
        if(err) return console.error(err)
        msg.channel.send(`Command ${discordCommandName} has been deleted.`)
      })
    } catch (err) {
      console.log(err)
    }
  } 
}