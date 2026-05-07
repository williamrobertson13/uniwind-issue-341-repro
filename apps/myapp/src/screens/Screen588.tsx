import { Pressable, Text, View } from 'react-native';

import { copy588 } from '../generated/copy/copy588';
import { layout588 } from '../generated/layouts/layout588';
import { palette588 } from '../generated/palettes/palette588';

export function Screen588() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout588.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy588.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy588.detail} / {palette588.name}
			</Text>
		</View>
	);
}
