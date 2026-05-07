import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy545 } from '../generated/copy/copy545';
import { layout545 } from '../generated/layouts/layout545';
import { palette545 } from '../generated/palettes/palette545';

const RuntimeView545 = withUniwind(View);

export function Screen545() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView545 styleClassName={layout545.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy545.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy545.detail} / {palette545.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
