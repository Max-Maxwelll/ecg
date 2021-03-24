using System;
using System.Collections.Generic;
using System.IO;

namespace Server.Classes
{
    static public class Reader
    {
        static public string[] GetData(BinaryReader reader)
        {
            try
            {
                string[] storageFirstSecondPointsOfDiagram = new string[reader.BaseStream.Length];

                string[] pointsY = new string[500000];
                //double[] pointsY = new double[reader.BaseStream.Length / 3];

                for (int i = 0; i < 1500000; i++)
                {
                    // Вносим данные в 
                    storageFirstSecondPointsOfDiagram[i] = Convert.ToString(reader.ReadSByte());
                }

                for (int step = 0; step < 500000; step++)
                {
                    pointsY[step] = storageFirstSecondPointsOfDiagram[step*3];

                    //counterOfMassif++;
                }
                //counterOfMassif = 0;

                return pointsY;
            }
            catch(Exception ex)
            {
                return new string[] { "Exception", ex.Message };
            }
        }
        static public string[] ChangeData(BinaryReader reader)
        {
            try
            {
                string[] storageFirstSecondPointsOfDiagram = new string[reader.BaseStream.Length];

                List<string> pointsY = new List<string>();
                //double[] pointsY = new double[reader.BaseStream.Length / 3];

                for (int i = 0; i < 1500000; i++)
                {
                    // Вносим данные в 
                    storageFirstSecondPointsOfDiagram[i] = Convert.ToString(reader.ReadSByte());
                }

                for (int step = 0; step < 500000; step++)
                {
                    if (Convert.ToInt32(storageFirstSecondPointsOfDiagram[step * 3]) > 60)
                    {
                        Random rnd = new Random();
                        pointsY.Add(Convert.ToString(rnd.Next(80, 100)));
                        pointsY.Add(Convert.ToString(rnd.Next(-100, -80)));
                        step += 6;
                    }
                    else
                    {
                        pointsY.Add(storageFirstSecondPointsOfDiagram[step * 3]);
                    }
                    //pointsY[step] = storageFirstSecondPointsOfDiagram[step*3];

                    //counterOfMassif++;
                }
                Console.WriteLine(pointsY.GetEnumerator());
                //counterOfMassif = 0;

                return pointsY.ToArray();
            }
            catch (Exception ex)
            {
                return new string[] { "Exception", ex.Message };
            }
        }
    }
}
