import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy119 } from '../generated/copy/copy119';
import { layout119 } from '../generated/layouts/layout119';
import { palette119 } from '../generated/palettes/palette119';

const RuntimeView119 = withUniwind(View);

export function Screen119() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView119 styleClassName={layout119.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy119.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy119.detail} / {palette119.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
