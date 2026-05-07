import { Pressable, Text, View } from 'react-native';

import { copy1223 } from '../generated/copy/copy1223';
import { layout1223 } from '../generated/layouts/layout1223';
import { palette1223 } from '../generated/palettes/palette1223';

export function Screen1223() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1223.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1223.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1223.detail} / {palette1223.name}
			</Text>
		</View>
	);
}
