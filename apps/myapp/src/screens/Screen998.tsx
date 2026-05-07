import { Pressable, Text, View } from 'react-native';

import { copy998 } from '../generated/copy/copy998';
import { layout998 } from '../generated/layouts/layout998';
import { palette998 } from '../generated/palettes/palette998';

export function Screen998() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout998.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy998.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy998.detail} / {palette998.name}
			</Text>
		</View>
	);
}
