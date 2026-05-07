import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy171 } from '../generated/copy/copy171';
import { layout171 } from '../generated/layouts/layout171';
import { palette171 } from '../generated/palettes/palette171';

const RuntimeView171 = withUniwind(View);

export function Screen171() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView171 styleClassName={layout171.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy171.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy171.detail} / {palette171.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
