import { Pressable, Text, View } from 'react-native';

import { copy788 } from '../generated/copy/copy788';
import { layout788 } from '../generated/layouts/layout788';
import { palette788 } from '../generated/palettes/palette788';

export function Screen788() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout788.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy788.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy788.detail} / {palette788.name}
			</Text>
		</View>
	);
}
