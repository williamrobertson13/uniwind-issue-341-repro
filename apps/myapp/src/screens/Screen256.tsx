import { Pressable, Text, View } from 'react-native';

import { copy256 } from '../generated/copy/copy256';
import { layout256 } from '../generated/layouts/layout256';
import { palette256 } from '../generated/palettes/palette256';

export function Screen256() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout256.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy256.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy256.detail} / {palette256.name}
			</Text>
		</View>
	);
}
