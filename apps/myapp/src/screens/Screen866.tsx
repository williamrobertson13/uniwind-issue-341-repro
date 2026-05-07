import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy866 } from '../generated/copy/copy866';
import { layout866 } from '../generated/layouts/layout866';
import { palette866 } from '../generated/palettes/palette866';

const RuntimeView866 = withUniwind(View);

export function Screen866() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView866 styleClassName={layout866.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy866.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy866.detail} / {palette866.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
