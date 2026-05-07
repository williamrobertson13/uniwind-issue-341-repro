import { Pressable, Text, View } from 'react-native';

import { copy596 } from '../generated/copy/copy596';
import { layout596 } from '../generated/layouts/layout596';
import { palette596 } from '../generated/palettes/palette596';

export function Screen596() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout596.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy596.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy596.detail} / {palette596.name}
			</Text>
		</View>
	);
}
