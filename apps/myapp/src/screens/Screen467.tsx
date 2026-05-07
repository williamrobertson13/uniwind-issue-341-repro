import { Pressable, Text, View } from 'react-native';

import { copy467 } from '../generated/copy/copy467';
import { layout467 } from '../generated/layouts/layout467';
import { palette467 } from '../generated/palettes/palette467';

export function Screen467() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout467.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy467.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy467.detail} / {palette467.name}
			</Text>
		</View>
	);
}
