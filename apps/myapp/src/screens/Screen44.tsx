import { Pressable, Text, View } from 'react-native';

import { copy44 } from '../generated/copy/copy44';
import { layout44 } from '../generated/layouts/layout44';
import { palette44 } from '../generated/palettes/palette44';

export function Screen44() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout44.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy44.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy44.detail} / {palette44.name}
			</Text>
		</View>
	);
}
