import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy794 } from '../generated/copy/copy794';
import { layout794 } from '../generated/layouts/layout794';
import { palette794 } from '../generated/palettes/palette794';

const RuntimeView794 = withUniwind(View);

export function Screen794() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView794 styleClassName={layout794.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy794.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy794.detail} / {palette794.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
