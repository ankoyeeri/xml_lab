<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Список университетов со специальностью ПОИТ</h1>
                <table border="1">
                    <tr bgcolor="burleywood">
                        <th style="text-align:center">Университет</th>
                        <th style="text-align:center">Проходные баллы</th>
                        <th style="text-align:center">План приема</th>
                        <th style="text-align:center">Город</th>
                    </tr>
                    <xsl:for-each select="Faculty/specialization">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="mark"/></td>
                            <td><xsl:value-of select="plan"/></td>
                            <td><xsl:value-of select="city"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>