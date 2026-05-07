import { Pressable, Text, View } from 'react-native';

import { copy764 } from '../generated/copy/copy764';
import { layout764 } from '../generated/layouts/layout764';
import { palette764 } from '../generated/palettes/palette764';

export function Screen764() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout764.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy764.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy764.detail} / {palette764.name}
			</Text>
		</View>
	);
}
