<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
    <title>Pain output</title>
</head>

<body>
    <xsl:for-each select="complaint/questions/question">
        
        <xsl:value-of select="name" />
        
        <xsl:for-each select="answer">
            
            <xsl:choose>
                
                <xsl:when test="key = 'A'">

                    <xsl:value-of select="printValue" />

                </xsl:when>
                
            </xsl:choose>
            
        </xsl:for-each>
    
    </xsl:for-each>
</body>
</html>        
        
</xsl:template>

</xsl:stylesheet>