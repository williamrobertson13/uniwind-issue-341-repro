import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy738 } from '../generated/copy/copy738';
import { layout738 } from '../generated/layouts/layout738';
import { palette738 } from '../generated/palettes/palette738';

const RuntimeView738 = withUniwind(View);

export function Screen738() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView738 styleClassName={layout738.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy738.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy738.detail} / {palette738.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
