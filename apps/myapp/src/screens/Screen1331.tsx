import { Pressable, Text, View } from 'react-native';

import { copy1331 } from '../generated/copy/copy1331';
import { layout1331 } from '../generated/layouts/layout1331';
import { palette1331 } from '../generated/palettes/palette1331';

export function Screen1331() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1331.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1331.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1331.detail} / {palette1331.name}
			</Text>
		</View>
	);
}
