import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy650 } from '../generated/copy/copy650';
import { layout650 } from '../generated/layouts/layout650';
import { palette650 } from '../generated/palettes/palette650';

const RuntimeView650 = withUniwind(View);

export function Screen650() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView650 styleClassName={layout650.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy650.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy650.detail} / {palette650.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
