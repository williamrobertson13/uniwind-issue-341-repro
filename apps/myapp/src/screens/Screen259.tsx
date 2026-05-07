import { Pressable, Text, View } from 'react-native';

import { copy259 } from '../generated/copy/copy259';
import { layout259 } from '../generated/layouts/layout259';
import { palette259 } from '../generated/palettes/palette259';

export function Screen259() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout259.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy259.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy259.detail} / {palette259.name}
			</Text>
		</View>
	);
}
