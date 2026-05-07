import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy215 } from '../generated/copy/copy215';
import { layout215 } from '../generated/layouts/layout215';
import { palette215 } from '../generated/palettes/palette215';

const RuntimeView215 = withUniwind(View);

export function Screen215() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView215 styleClassName={layout215.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy215.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy215.detail} / {palette215.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
