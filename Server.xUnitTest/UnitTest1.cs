using Server.Classes;
using System;
using System.IO;
using Xunit;

namespace Server.xUnitTest
{
    public class UnitTest1
    {
        [Theory]
        [InlineData("D:/Files/Server/Server.xUnitTest//testDat.dat")]
        [InlineData("D:/Files/Server/Server.xUnitTest//testDat2.dat")]
        public void GetData(string path)
        {
            string[] m = null;
            using (FileStream file = File.Open(path, FileMode.Open))
            {
                using (BinaryReader reader = new BinaryReader(file))
                {
                    m = Reader.GetData(reader);

                    Assert.NotEmpty(m);
                }
            }
        }
    }
}
