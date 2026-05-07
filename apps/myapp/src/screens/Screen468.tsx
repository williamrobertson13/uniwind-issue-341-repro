import { Pressable, Text, View } from 'react-native';

import { copy468 } from '../generated/copy/copy468';
import { layout468 } from '../generated/layouts/layout468';
import { palette468 } from '../generated/palettes/palette468';

export function Screen468() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout468.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy468.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy468.detail} / {palette468.name}
			</Text>
		</View>
	);
}
