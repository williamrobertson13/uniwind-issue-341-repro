import { Pressable, Text, View } from 'react-native';

import { copy968 } from '../generated/copy/copy968';
import { layout968 } from '../generated/layouts/layout968';
import { palette968 } from '../generated/palettes/palette968';

export function Screen968() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout968.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy968.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy968.detail} / {palette968.name}
			</Text>
		</View>
	);
}
