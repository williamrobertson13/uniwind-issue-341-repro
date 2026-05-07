import { Pressable, Text, View } from 'react-native';

import { copy19 } from '../generated/copy/copy19';
import { layout19 } from '../generated/layouts/layout19';
import { palette19 } from '../generated/palettes/palette19';

export function Screen19() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout19.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy19.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy19.detail} / {palette19.name}
			</Text>
		</View>
	);
}
