import { Pressable, Text, View } from 'react-native';

import { copy1388 } from '../generated/copy/copy1388';
import { layout1388 } from '../generated/layouts/layout1388';
import { palette1388 } from '../generated/palettes/palette1388';

export function Screen1388() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1388.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1388.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1388.detail} / {palette1388.name}
			</Text>
		</View>
	);
}
