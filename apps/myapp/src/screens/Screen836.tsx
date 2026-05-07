import { Pressable, Text, View } from 'react-native';

import { copy836 } from '../generated/copy/copy836';
import { layout836 } from '../generated/layouts/layout836';
import { palette836 } from '../generated/palettes/palette836';

export function Screen836() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout836.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy836.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy836.detail} / {palette836.name}
			</Text>
		</View>
	);
}
