import { Pressable, Text, View } from 'react-native';

import { copy956 } from '../generated/copy/copy956';
import { layout956 } from '../generated/layouts/layout956';
import { palette956 } from '../generated/palettes/palette956';

export function Screen956() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout956.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy956.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy956.detail} / {palette956.name}
			</Text>
		</View>
	);
}
