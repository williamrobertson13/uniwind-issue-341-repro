import { Pressable, Text, View } from 'react-native';

import { copy1307 } from '../generated/copy/copy1307';
import { layout1307 } from '../generated/layouts/layout1307';
import { palette1307 } from '../generated/palettes/palette1307';

export function Screen1307() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1307.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1307.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1307.detail} / {palette1307.name}
			</Text>
		</View>
	);
}
