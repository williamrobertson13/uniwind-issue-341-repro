import { Pressable, Text, View } from 'react-native';

import { copy464 } from '../generated/copy/copy464';
import { layout464 } from '../generated/layouts/layout464';
import { palette464 } from '../generated/palettes/palette464';

export function Screen464() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout464.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy464.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy464.detail} / {palette464.name}
			</Text>
		</View>
	);
}
