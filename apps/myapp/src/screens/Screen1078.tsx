import { Pressable, Text, View } from 'react-native';

import { copy1078 } from '../generated/copy/copy1078';
import { layout1078 } from '../generated/layouts/layout1078';
import { palette1078 } from '../generated/palettes/palette1078';

export function Screen1078() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1078.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1078.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1078.detail} / {palette1078.name}
			</Text>
		</View>
	);
}
