module.exports = function ( opt )
{
	opt = opt || {};

	opt.targetFilePath = opt.targetFilePath || '.gitignore';

	opt.openTag = opt.openTag || "# Packetizer START";
	opt.closeTag = opt.closeTag || "# Packetizer END";

	opt.filenameTemplate = opt.filenameTemplate || '/{{filename}}';
	opt.fixWindowsSlashes = true;
	opt.appendLineBreak = true;

	return require('packetizer').hooks.enumerate(opt);
};