import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy23 } from '../generated/copy/copy23';
import { layout23 } from '../generated/layouts/layout23';
import { palette23 } from '../generated/palettes/palette23';

const RuntimeView23 = withUniwind(View);

export function Screen23() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView23 styleClassName={layout23.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy23.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy23.detail} / {palette23.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
