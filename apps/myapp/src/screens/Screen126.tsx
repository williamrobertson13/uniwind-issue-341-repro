import { Pressable, Text, View } from 'react-native';

import { copy126 } from '../generated/copy/copy126';
import { layout126 } from '../generated/layouts/layout126';
import { palette126 } from '../generated/palettes/palette126';

export function Screen126() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout126.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy126.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy126.detail} / {palette126.name}
			</Text>
		</View>
	);
}
